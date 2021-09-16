import React from "react";
import Todo from "./Todo"
 
export default function List(props) {
  return <div>
      {props.list.map((item, index) => {
          return <Todo item={item} key={index} />
      })}
      </div>;
}