import { TransferProps, TreeDataNode } from "antd";

export interface TreeTransferProps {
    dataSource: TreeDataNode[];
    targetKeys: TransferProps["targetKeys"];
    onChange: TransferProps["onChange"];
}
