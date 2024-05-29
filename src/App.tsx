import React, { useState } from "react";
import { TreeTransfer } from "./components/TreeTransfer";
import { TreeTransferProps } from "./types/TreeTransferProps";
import { initTreeData } from "./mock/initTreeData";

const App: React.FC = () => {
    const [targetKeys, setTargetKeys] = useState<string[]>([]);

    const onChange: TreeTransferProps["onChange"] = (nextTargetKeys) => {
        const newKeys = Array.from(new Set(nextTargetKeys)); // 去重
        setTargetKeys(newKeys as any);
    };

    return <TreeTransfer dataSource={initTreeData} targetKeys={targetKeys} onChange={onChange} />;
};

export default App;
