import React, {FC} from 'react';
import {PropertyType} from "./ProductPage";

type TablePropsType = {
  properties: PropertyType[]
}

export const Table: FC<TablePropsType> = (props) => {
  return (
    <>
      <table>
        {props.properties.map((pr: PropertyType) => {
          return <tr key={pr.id}>
            <td>{pr.name}</td>
            <td>{pr.value}</td>
          </tr>
        })}
      </table>
    </>
  );
};
