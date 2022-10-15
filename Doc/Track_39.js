var combinationSum = function (candidates, target) {
    const result = [];
    const path = [];
    backtracking(0, target, path);
    return result;

    function backtracking(begin, target, path) {
        if (target < 0) {
            return;
        }
        if (target === 0) {
            result.push([...path]);
            return;
        }
        for (let i = begin; i < candidates.length; i++) {
            path.push(candidates[i]);
           
            target -= candidates[i];
            backtracking(i, target, path);
            path.pop();
           
            target += candidates[i];
        }
    }
};