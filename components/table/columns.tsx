"use client";

import { COLOR_EXTENSION_MAP } from "@/constant";
import { FileType } from "@/typing";
import { ColumnDef } from "@tanstack/react-table";
import prettyBytes from "pretty-bytes";
import { FileIcon,defaultStyles } from 'react-file-icon';

export const columns: ColumnDef<FileType>[] = [
  {
    accessorKey: "type",
    header: "type",
    cell: ({ renderValue, ...props }) => {
      const type = renderValue() as string;
      const extension: string = type.split("/")[1];
      return(
        <div className="w-10">
            <FileIcon
            extension={extension}
            labelColor={COLOR_EXTENSION_MAP[extension]}
            //@ts-ignore
            {...defaultStyles[extension]}
            />
        </div>
      )
    },
  },
  {
    accessorKey: "filename",
    header: "Filename",
  },
  {
    accessorKey: "timestamp",
    header: "Date Added",
  },
  {
    accessorKey: "size",
    header: "Size",
    cell: ({ renderValue, ...props }) => {
      return <span>{prettyBytes(renderValue() as number)}</span>;
    },
  },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ renderValue, ...props }) => {
      const stat = renderValue() as string;
      return stat ? (
        stat
      ) : "Not Started";
      }
  },
  {
    accessorKey: "downloadURL",
    header: "Labelled File",
    cell: ({ renderValue, ...props }) => {
      const url = renderValue() as string;
      return url ? (
        <a
          href={url}
          target="_blank"
          className="underline text-blue-500 hover:text-blue-600"
        >
          Download
        </a>
      ) : null;
      }
    },
];
