import { theme, Transfer, Tree, TreeDataNode } from "antd";
import React from "react";
import { TransferItem } from "../types/TransferItem";
import { TreeTransferProps } from "../types/TreeTransferProps";
import { generateLeftTree } from "../utils/generateLeftTree";
import { generateRightTree } from "../utils/generateRightTree";

/**
 * @description: Antd TreeTransfer
 */
export const TreeTransfer: React.FC<TreeTransferProps> = (props) => {
    const { dataSource, targetKeys = [], ...restProps } = props;
    const { token } = theme.useToken();

    const transferDataSource: TransferItem[] = [];
    function flatten(list: TreeDataNode[]): void {
        list.forEach((item) => {
            transferDataSource.push(item);
            if (item?.children) {
                flatten(item?.children);
            }
        });
    }
    flatten(dataSource);

    return (
        <Transfer
            {...restProps}
            titles={["来源", "去向"]}
            targetKeys={targetKeys}
            dataSource={transferDataSource}
            render={(item) => item?.title}
            locale={{ itemUnit: "项", itemsUnit: "项" }}
        >
            {({ direction, onItemSelectAll, selectedKeys }) => {
                if (direction === "left") {
                    const checkedKeys = [...selectedKeys, ...targetKeys];
                    return (
                        <div style={{ padding: token.paddingXS }}>
                            <Tree
                                checkable
                                defaultExpandAll
                                checkedKeys={checkedKeys}
                                treeData={generateLeftTree(dataSource, targetKeys as string[])}
                                onCheck={(_, info) => {
                                    const { checkedNodes } = info;
                                    const newKeys = Array.from(
                                        new Set([...checkedNodes.map((node) => node.key), ...targetKeys])
                                    );
                                    onItemSelectAll(newKeys, "replace");
                                }}
                            />
                        </div>
                    );
                } else {
                    return (
                        <div style={{ padding: token.paddingXS }}>
                            <Tree
                                checkable
                                defaultExpandAll
                                checkedKeys={selectedKeys}
                                treeData={generateRightTree(dataSource, targetKeys as string[])}
                                onCheck={(checked: any) => {
                                    onItemSelectAll(checked, "replace");
                                }}
                            />
                        </div>
                    );
                }
            }}
        </Transfer>
    );
};
