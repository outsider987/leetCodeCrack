// 儲存不同響應式物件，例如是 "data"
const targetMap = new WeakMap();

// 觸發 get 時會跑 track，儲存依賴
function track(target, key) {
    // 取得 depsMap
    let depsMap = targetMap.get(target);
    if (!depsMap) {
        // 如果還沒建立 depsMap，就建立一個
        targetMap.set(target, (depsMap = new Map()));
    }
    // 取得對應 dep 實體
    let dep = depsMap.get(key);
    if (!dep) {
        // 如果沒有 dep 實體，就建立一個
        depsMap.set(key, (dep = new Set())); // Create a new Set
    }
    // 把依賴儲存起來
    dep.add(effect);
}

// 觸發 set 時會跑 trigger，執行所有依賴來更新所有值
function trigger(target, key) {
    // 取得 depsMap
    const depsMap = targetMap.get(target);
    if (!depsMap) {
        return;
    }
    // 取得對應的 dep 實體
    let dep = depsMap.get(key);
    if (dep) {
        dep.forEach((effect) => {
            // 跑一次所有依賴
            effect();
        });
    }
}

function reactive(target) {
    const handler = {
        get(target, key, receiver) {
            let result = Reflect.get(target, key, receiver);
            // 把依賴儲存起來
            track(target, key);
            return result;
        },
        set(target, key, value, receiver) {
            let oldValue = target[key];
            // 以下會回傳布林值
            let bol = Reflect.set(target, key, value, receiver);
            if (bol && oldValue != value) {
                // 執行所有依賴
                trigger(target, key);
            }
            // set handler 規定要回傳 true
            return bol;
        },
    };
    return new Proxy(target, handler);
}

const data = reactive({
    price: 100,
    quantity: 2,
});
let total, effect;

// 把依賴名為 effect
effect = () => {
    total = data.price * data.quantity;
};

// 初始化 total 的值，所以一開始要跑一次
effect();

console.log(`total 的初始值： ${total}`); // total 的初始值： 200
console.log((data.price = 1000)); // 1000
console.log(`total 目前的值： ${total}`); // total 目前的值： 2000


const t = {
    get proo() {

    }
}
