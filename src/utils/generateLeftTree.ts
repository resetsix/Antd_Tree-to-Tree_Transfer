import { TreeDataNode } from "antd";

/**
 * @description: 左穿梭框树数据转换
 * @param {TreeDataNode} treeNodes 树节点
 * @param {string[]} checkedKeys 选中的 key 数组
 */
export const generateLeftTree = (treeNodes: TreeDataNode[], checkedKeys: string[]): TreeDataNode[] => treeNodes.map((node) => {
    const newNode = { ...node };
    newNode.disabled = checkedKeys.includes(node.key as string);
    if (newNode.children) {
        newNode.children = generateLeftTree(newNode.children, checkedKeys);
    }
    return newNode;
});
