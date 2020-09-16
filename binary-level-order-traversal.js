var levelOrder = function(root) {
    if(!root) return [];
    let queue=[root],result=[];
    while(queue.length)
    {
        let level=queue.length;
        let current=[];
        for(let i=0;i<level;i++)
        {
            let node=queue.shift();
            current.push(node.val);
            if(node.left) queue.push(node.left);
            if(node.right) queue.push(node.right)
        }
        result.push(current)
    }
    return result;
};
// @lc code=end

