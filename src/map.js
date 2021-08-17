import assert from "assert";

export default function mapAPI() {
    const itemObj = { name: 'giovani' }
    const itemMap = new Map([
        ['name', 'giovani']
    ]);

    itemObj.birthDay = '26/05/1999';
    assert.ok(itemObj.birthDay === '26/05/1999');

    itemMap.set('birthDay', '26/05/1999');
    assert.deepStrictEqual(itemMap.get('birthDay'), '26/05/1999');

    assert.ok(itemObj.hasOwnProperty('birthDay'));
    assert.ok(itemMap.has('birthDay'));

    delete itemObj.birthDay;
    assert.ok(itemObj.hasOwnProperty('birthDay') === false);

    itemMap.delete('birthDay');
    assert.ok(itemMap.has('birthDay') === false);

    assert.deepStrictEqual(Object.keys(itemObj).length, 1);
    assert.deepStrictEqual(itemMap.size, 1);

    assert.deepStrictEqual(Object.entries(itemObj), [['name', 'giovani']]);
    assert.deepStrictEqual([...itemMap], [['name', 'giovani']]);

    for (const [key, value] of Object.entries(itemObj)) {
        assert.deepStrictEqual([key, value], ['name', 'giovani']);
    }

    for (const [key, value] of itemMap) {
        assert.deepStrictEqual([key, value], ['name', 'giovani']);
    }

    Object.keys(itemObj).map(key => delete itemObj[key]);
    assert.deepStrictEqual(Object.keys(itemObj), []);

    itemMap.clear();
    assert.deepStrictEqual([...itemMap.keys()], []);
}