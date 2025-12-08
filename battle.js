// 戦闘結果を保持
let allBattleResults = [];

// 初期化
document.addEventListener('DOMContentLoaded', function() {
    initializeSelects();
    loadUnitOptions();
    loadWeaponOptions();
});

// プルダウン初期化
function initializeSelects() {
    // レベル (1-20)
    const lvSelect = document.getElementById('lv');
    for (let i = 1; i <= 20; i++) {
        lvSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
    
    // HP (1-60)
    const hpSelect = document.getElementById('hp');
    for (let i = 1; i <= 60; i++) {
        hpSelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
    
    // 力, 技, 速さ, 幸運, 守備, 魔防 (0-39)
    const statSelects = ['power', 'skill', 'speed', 'luck', 'defense', 'magicDef'];
    statSelects.forEach(id => {
        const select = document.getElementById(id);
        for (let i = 0; i <= 39; i++) {
            select.innerHTML += `<option value="${i}">${i}</option>`;
        }
    });
    
    // 体格 (1-25)
    const bodySelect = document.getElementById('body');
    for (let i = 1; i <= 25; i++) {
        bodySelect.innerHTML += `<option value="${i}">${i}</option>`;
    }
}

// ユニットオプション読み込み
function loadUnitOptions() {
    const unitSelect = document.getElementById('unit');
    units.forEach(unit => {
        unitSelect.innerHTML += `<option value="${unit.name}">${unit.name}</option>`;
    });
}

// 武器オプション読み込み
function loadWeaponOptions() {
    const weaponSelect = document.getElementById('weapon');
    weapons.forEach(weapon => {
        weaponSelect.innerHTML += `<option value="${weapon.name}">${weapon.name}</option>`;
    });
}

// 期待値を表示
function displayExpectedValues() {
    const unitName = document.getElementById('unit').value;
    const level = parseInt(document.getElementById('lv').value);
    const isClassChange = document.getElementById('class-change').checked;
    
    const unit = units.find(u => u.name === unitName);
    if (!unit) return;
    
    const unitClass = unitClasses.find(c => c.className === unit.class);
    if (!unitClass) return;
    
    const upLevel = level - unit.level;
    const upLevelCC = level - unit.level + 19;
    
    let expected;
    if (isClassChange && unit.class !== unit.ccClass) {
        expected = {
            hp: unit.hp + Math.floor(upLevelCC * unit.hpGrowth) + unitClass.bonusHp,
            power: unit.power + Math.floor(upLevelCC * unit.powerGrowth) + unitClass.bonusPower,
            skill: unit.skill + Math.floor(upLevelCC * unit.skillGrowth) + unitClass.bonusSkill,
            speed: unit.speed + Math.floor(upLevelCC * unit.speedGrowth) + unitClass.bonusSpeed,
            luck: unit.luck + Math.floor(upLevelCC * unit.luckGrowth) + unitClass.bonusLuck,
            defense: unit.defense + Math.floor(upLevelCC * unit.defenseGrowth) + unitClass.bonusDefence,
            magicDef: unit.magicDef + Math.floor(upLevelCC * unit.magicDefGrowth) + unitClass.bonusMagicDef,
            body: unit.body + unitClass.bonusBody
        };
    } else {
        expected = {
            hp: unit.hp + Math.floor(upLevel * unit.hpGrowth),
            power: unit.power + Math.floor(upLevel * unit.powerGrowth),
            skill: unit.skill + Math.floor(upLevel * unit.skillGrowth),
            speed: unit.speed + Math.floor(upLevel * unit.speedGrowth),
            luck: unit.luck + Math.floor(upLevel * unit.luckGrowth),
            defense: unit.defense + Math.floor(upLevel * unit.defenseGrowth),
            magicDef: unit.magicDef + Math.floor(upLevel * unit.magicDefGrowth),
            body: unit.body
        };
    }
    
    // 値を反映
    document.getElementById('hp').value = Math.max(1, Math.min(60, expected.hp));
    document.getElementById('power').value = Math.max(0, Math.min(39, expected.power));
    document.getElementById('skill').value = Math.max(0, Math.min(39, expected.skill));
    document.getElementById('speed').value = Math.max(0, Math.min(39, expected.speed));
    document.getElementById('luck').value = Math.max(0, Math.min(39, expected.luck));
    document.getElementById('defense').value = Math.max(0, Math.min(39, expected.defense));
    document.getElementById('magicDef').value = Math.max(0, Math.min(39, expected.magicDef));
    document.getElementById('body').value = Math.max(1, Math.min(25, expected.body));
}

// 戦闘開始
function startBattle() {
    const unitName = document.getElementById('unit').value;
    const level = parseInt(document.getElementById('lv').value);
    const hp = parseInt(document.getElementById('hp').value);
    const power = parseInt(document.getElementById('power').value);
    const skill = parseInt(document.getElementById('skill').value);
    const speed = parseInt(document.getElementById('speed').value);
    const luck = parseInt(document.getElementById('luck').value);
    const defense = parseInt(document.getElementById('defense').value);
    const magicDef = parseInt(document.getElementById('magicDef').value);
    const body = parseInt(document.getElementById('body').value);
    const weaponName = document.getElementById('weapon').value;
    const isClassChange = document.getElementById('class-change').checked;
    
    const unit = units.find(u => u.name === unitName);
    const weapon = weapons.find(w => w.name === weaponName);
    
    if (!unit || !weapon) return;
    
    const unitClass = unitClasses.find(c => c.className === (isClassChange ? unit.ccClass : unit.class));
    
    // 全敵との戦闘計算
    allBattleResults = enemies.map(enemy => {
        return calculateBattle(unit, weapon, enemy, unitClass, {
            level, hp, power, skill, speed, luck, defense, magicDef, body
        });
    });
    
    filterResults();
}

// 戦闘計算
function calculateBattle(unit, weapon, enemy, unitClass, stats) {
    // 敵の武器を取得
    const enemyWeapon = weapons.find(w => w.name === enemy.weapon);
    if (!enemyWeapon) {
        return {
            enemy: enemy,
            damageGiven: '---',
            hitRate: 0,
            criticalRate: 0,
            damageTaken: '---',
            enemyHitRate: 0,
            enemyCriticalRate: 0,
            evaluation: 'エラー'
        };
    }
    
    // 攻撃速度の計算
    const unitWtLos = Math.max(0, weapon.weight - stats.body);
    const enemyWtLos = Math.max(0, enemyWeapon.weight - enemy.constitution);
    const atkSpeed = (stats.speed - unitWtLos) - (enemy.speed - enemyWtLos);
    
    // 武器相性
    const unitAisho = getWeaponAdvantage(weapon.attribute, enemyWeapon.attribute);
    const enemyAisho = getWeaponAdvantage(enemyWeapon.attribute, weapon.attribute);
    
    // 特効倍率
    const unitTokko = getEffectiveness(weapon, enemy.class);
    const enemyTokko = getEffectiveness(enemyWeapon, unitClass?.className || unit.class);
    
    // 味方ダメージ計算
    let unitAtk = stats.power + (weapon.power + unitAisho.damage) * unitTokko;
    let unitDamage;
    
    // 物理か魔法かで参照する守備が変わる
    if (['理', '光', '闇'].includes(weapon.attribute) || weapon.name === 'ひかりの剣(間接)' || weapon.name === 'ルーンソード') {
        unitDamage = Math.max(0, unitAtk - enemy.resistance);
    } else {
        unitDamage = Math.max(0, unitAtk - enemy.defense);
    }
    
    // 命中率
    let unitHitR = weapon.hitRate + (stats.skill * 2) + (stats.luck * 0.5) + unitAisho.hit;
    const enemyKaihiR = (enemy.speed - enemyWtLos) * 2 + enemy.luck;
    let hitRateCalc = Math.max(0, Math.floor(unitHitR - enemyKaihiR));
    
    // 必殺率
    let classHissatsu = 0;
    if (unitClass && (unitClass.className === 'ソードマスター(男)' || unitClass.className === 'ソードマスター(女)' || unitClass.className === 'ソードマスター' || unitClass.className === '狂戦士')) {
        classHissatsu = 15;
    }
    const unitHissatsuR = weapon.criticalRate + Math.floor(stats.skill / 2) + classHissatsu;
    const enemyHissatsuKaihi = enemy.luck;
    let criticalRateCalc = Math.max(0, Math.floor(unitHissatsuR - enemyHissatsuKaihi));
    
    // 敵ダメージ計算
    let enemyAtk = enemy.power + (enemyWeapon.power + enemyAisho.damage) * enemyTokko;
    let enemyDamage;
    
    if (['理', '光', '闇'].includes(enemyWeapon.attribute) || enemyWeapon.name === 'ひかりの剣(間接)' || enemyWeapon.name === 'ルーンソード') {
        enemyDamage = Math.max(0, enemyAtk - stats.magicDef);
    } else {
        enemyDamage = Math.max(0, enemyAtk - stats.defense);
    }
    
    // 敵命中率
    let enemyHitR = enemyWeapon.hitRate + (enemy.skill * 2) + (enemy.luck * 0.5) + enemyAisho.hit;
    const unitKaihiR = (stats.speed - unitWtLos) * 2 + stats.luck;
    let enemyHitRateCalc = Math.max(0, Math.floor(enemyHitR - unitKaihiR));
    
    // 敵必殺率
    let enemyClassHissatsu = 0;
    if (enemy.class === 'ソードマスター' || enemy.class === '狂戦士') {
        enemyClassHissatsu = 15;
    }
    const enemyHissatsuR = enemyWeapon.criticalRate + Math.floor(enemy.skill / 2) + enemyClassHissatsu;
    const unitHissatsuKaihi = stats.luck;
    let enemyCriticalRateCalc = Math.max(0, Math.floor(enemyHissatsuR - unitHissatsuKaihi));
    
    // 戦闘シミュレーション
    let tempUnitHp = stats.hp;
    let tempEnemyHp = enemy.hp;
    
    // 味方攻撃
    tempEnemyHp -= unitDamage;
    let unitWin = tempEnemyHp <= 0;
    
    // 敵反撃
    if (!unitWin) {
        tempUnitHp -= enemyDamage;
        let enemyWin = tempUnitHp <= 0;
        
        // 追撃
        if (!enemyWin) {
            if (atkSpeed >= 4) {
                tempEnemyHp -= unitDamage;
                unitWin = tempEnemyHp <= 0;
            } else if (atkSpeed <= -4) {
                tempUnitHp -= enemyDamage;
                enemyWin = tempUnitHp <= 0;
            }
        }
    }
    
    // 結果
    let damageGivenStr = atkSpeed >= 4 ? `${unitDamage} ×2` : `${unitDamage}`;
    let damageTakenStr = atkSpeed <= -4 ? `${enemyDamage} ×2` : `${enemyDamage}`;
    
    let evaluation;
    if (tempEnemyHp <= 0) {
        evaluation = '勝てそう！';
    } else if (tempUnitHp <= 0) {
        evaluation = '負けそう…';
    } else {
        evaluation = '決着つかず';
    }
    
    return {
        enemy: enemy,
        damageGiven: damageGivenStr,
        hitRate: hitRateCalc,
        criticalRate: criticalRateCalc,
        damageTaken: damageTakenStr,
        enemyHitRate: enemyHitRateCalc,
        enemyCriticalRate: enemyCriticalRateCalc,
        evaluation: evaluation
    };
}

// 武器相性を取得
function getWeaponAdvantage(attackerAttr, defenderAttr) {
    // 物理三すくみ
    const physAdvantage = {
        '剣': { '斧': { damage: 1, hit: 15 }, '槍': { damage: -1, hit: -15 } },
        '槍': { '剣': { damage: 1, hit: 15 }, '斧': { damage: -1, hit: -15 } },
        '斧': { '槍': { damage: 1, hit: 15 }, '剣': { damage: -1, hit: -15 } }
    };
    
    // 魔法三すくみ
    const magAdvantage = {
        '理': { '光': { damage: 1, hit: 15 }, '闇': { damage: -1, hit: -15 } },
        '光': { '闇': { damage: 1, hit: 15 }, '理': { damage: -1, hit: -15 } },
        '闘': { '理': { damage: 1, hit: 15 }, '光': { damage: -1, hit: -15 } }
    };
    
    if (physAdvantage[attackerAttr] && physAdvantage[attackerAttr][defenderAttr]) {
        return physAdvantage[attackerAttr][defenderAttr];
    }
    if (magAdvantage[attackerAttr] && magAdvantage[attackerAttr][defenderAttr]) {
        return magAdvantage[attackerAttr][defenderAttr];
    }
    
    return { damage: 0, hit: 0 };
}

// 特効判定
function getEffectiveness(weapon, targetClass) {
    // 弓の飛行特効
    if (weapon.attribute === '弓') {
        if (targetClass.includes('ペガサス') || targetClass.includes('ファルコン') || targetClass.includes('ドラゴン')) {
            return 3;
        }
    }
    
    // 特効武器
    const specialWeapons = {
        'マーニ・カティ': ['アーマーナイト', 'ジェネラル', 'ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', 'グレートロード', '遊牧民', '遊牧騎兵'],
        'レイピア': ['アーマーナイト', 'ジェネラル', 'ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', 'グレートロード', '遊牧民', '遊牧騎兵'],
        'ヴォルフバイル': ['アーマーナイト', 'ジェネラル', 'ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', 'グレートロード', '遊牧民', '遊牧騎兵'],
        'デュランダル': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜'],
        'ソール・カティ': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜'],
        'ドラゴンキラー': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜'],
        'アルマーズ': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜'],
        'アーマーキラー': ['アーマーナイト', 'ジェネラル', 'グレートロード'],
        'つらぬきのやり': ['アーマーナイト', 'ジェネラル', 'グレートロード'],
        'ハンマー': ['アーマーナイト', 'ジェネラル', 'グレートロード'],
        '長柄刀': ['ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', '遊牧民', '遊牧騎兵'],
        'ホースキラー': ['ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', '遊牧民', '遊牧騎兵'],
        'ハルベルト': ['ソシアルナイト', 'パラディン', 'トルバドール', 'ヴァルキュリア', 'ロードナイト', '遊牧民', '遊牧騎兵'],
        'ソードキラー': ['剣士', 'ソードマスター', '傭兵', '勇者', 'ブレイドロード'],
        'フォルブレイズ': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜'],
        'アーリアル': ['ドラゴンナイト', 'ドラゴンマスター', '古の火竜']
    };
    
    if (specialWeapons[weapon.name]) {
        for (const effectiveClass of specialWeapons[weapon.name]) {
            if (targetClass.includes(effectiveClass)) {
                // 竜特効は2倍、その他は3倍
                if (['デュランダル', 'ソール・カティ', 'フォルブレイズ', 'アルマーズ'].includes(weapon.name) && targetClass.includes('ドラゴン')) {
                    return 2;
                }
                if (weapon.name === 'アーリアル') {
                    return 3;
                }
                return 3;
            }
        }
    }
    
    return 1;
}

// 結果フィルター
function filterResults() {
    const difficultyFilter = document.getElementById('difficultyFilter').value;
    
    let filteredResults = allBattleResults;
    if (difficultyFilter !== 'all') {
        filteredResults = allBattleResults.filter(r => r.enemy.difficulty === difficultyFilter);
    }
    
    renderResults(filteredResults);
}

// 結果表示
function renderResults(results) {
    const tbody = document.getElementById('results');
    
    if (results.length === 0) {
        tbody.innerHTML = '<tr><td colspan="17" style="color: #888; padding: 30px;">結果がありません</td></tr>';
        return;
    }
    
    tbody.innerHTML = '';
    
    results.forEach(result => {
        const enemy = result.enemy;
        
        let evalClass = '';
        if (result.evaluation === '勝てそう！') {
            evalClass = 'evaluation-win';
        } else if (result.evaluation === '負けそう…') {
            evalClass = 'evaluation-lose';
        } else {
            evalClass = 'evaluation-draw';
        }
        
        let damageGivenClass = result.damageGiven.includes('×2') ? 'damage-double' : '';
        let damageTakenClass = result.damageTaken.includes('×2') ? 'damage-double' : '';
        
        tbody.innerHTML += `
            <tr>
                <td>${enemy.name}</td>
                <td>${enemy.level}</td>
                <td>${enemy.hp}</td>
                <td>${enemy.power}</td>
                <td>${enemy.skill}</td>
                <td>${enemy.speed}</td>
                <td>${enemy.luck}</td>
                <td>${enemy.defense}</td>
                <td>${enemy.resistance}</td>
                <td>${enemy.weapon}</td>
                <td class="${damageGivenClass}">${result.damageGiven}</td>
                <td>${result.hitRate}</td>
                <td>${result.criticalRate}</td>
                <td class="${damageTakenClass}">${result.damageTaken}</td>
                <td>${result.enemyHitRate}</td>
                <td>${result.enemyCriticalRate}</td>
                <td class="${evalClass}">${result.evaluation}</td>
            </tr>
        `;
    });
}

