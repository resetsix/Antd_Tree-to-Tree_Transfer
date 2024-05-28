import { TreeDataNode } from "antd";

/**
 * @description: 右穿梭框树数据转换
 * @param {TreeDataNode} treeData 树节点
 * @param {string} targetKeys 选中的key
 */
export const generateRightTree = (treeData: TreeDataNode[], targetKeys: string[]): TreeDataNode[] =>
    treeData
        .map((node) => {
            const newNode: any = { ...node };
            if (targetKeys.includes(node.key as string)) {
                newNode.checked = true;
                if (newNode.children) {
                    newNode.children = generateRightTree(newNode.children, targetKeys);
                }
            } else if (newNode.children) {
                newNode.children = generateRightTree(newNode.children, targetKeys);
            }
            return newNode;
        })
        .filter((node) => node.checked || (node.children && node.children.some((child: any) => child.checked)));
