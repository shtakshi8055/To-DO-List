import React, { useState, useEffect, useRef} from "react";
//const inputRef = useRef(0);
function Item ({item, setTodo}){

const [edit, setEdit] = useState(false);
const inputRef = useRef(0);

const handleEdit = () => {
    setEdit (true);
};

useEffect(() => {
    if (edit && inputRef.current) {
      inputRef.current.focus();
      // position the cursor at the end of the text
      inputRef.current.setSelectionRange(
        inputRef.current.value.length,
        inputRef.current.value.length
      );
    }
  }, [edit]);

const handleInput = () => {

   // event.preventDefault();
    setEdit(false);
};

const handleBlur = () => {
    setEdit(false);
};

return(
    <>
    <li id={item?.id}>
        {edit ? (
            <form onSubmit={handleInput}>
                <lable htmlFor="edit-todo"> 
                    <input ref={inputRef} type="text" name="edit-todo"
                        defaultValue={item?.title}
                        onBlur={handleBlur}></input>
                </lable>
            </form>
        ) : (
            <>
            <div>
                <button onClick={handleEdit}>Edit</button>
            </div>
            </>
        )
    }

    </li>
    </>
);
    
}
export default Item;