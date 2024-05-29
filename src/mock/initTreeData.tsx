import { TreeDataNode } from "antd";

export const initTreeData: TreeDataNode[] = [
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
