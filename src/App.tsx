import { TreeDataNode } from "antd";
import React, { useState } from "react";
import { TreeTransfer } from "./components/TreeTransfer";
import { TreeTransferProps } from "./types/TreeTransferProps";

const treeData: TreeDataNode[] = [
    { key: "0-0", title: "0-0" },
    {
        key: "0-1",
        title: "0-1",
        children: [
            { key: "0-1-0", title: "0-1-0" },
            { key: "0-1-1", title: "0-1-1" },
        ],
    },
    { key: "0-2", title: "0-2" },
    { key: "0-3", title: "0-3" },
    { key: "0-4", title: "0-4" },
];

const App: React.FC = () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);
    const onChange: TreeTransferProps["onChange"] = (nextTargetKeys) => {
        // 去重
        const newKeys = Array.from(new Set(nextTargetKeys));
        setTargetKeys(newKeys as any);
    };

    return (
        <TreeTransfer
            dataSource={treeData}
            targetKeys={targetKeys}
            onChange={onChange}
            setTargetKeys={setTargetKeys as any}
        />
    );
};

export default App;
