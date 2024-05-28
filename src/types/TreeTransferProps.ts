import { TransferProps, TreeDataNode } from "antd";
import React from "react";

export interface TreeTransferProps {
    dataSource: TreeDataNode[];
    targetKeys: TransferProps["targetKeys"];
    onChange: TransferProps["onChange"];
    setTargetKeys: React.Dispatch<React.SetStateAction<TransferProps["targetKeys"]>>;
}
