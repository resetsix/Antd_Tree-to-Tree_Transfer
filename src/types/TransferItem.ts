import { GetProp, TransferProps } from "antd";

export type TransferItem = GetProp<TransferProps, "dataSource">[number];
