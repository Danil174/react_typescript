import React, {useRef} from 'react'

interface TodoFormProps {
    onAdd(title: string): void
}

export const TodoForm: React.FC<TodoFormProps> = props => {
    // const [title, setTitle] = useState<string>('');
    const ref = useRef<HTMLInputElement>(null);

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    //     setTitle(event.target.value);
    // }

    const onkeypressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
            // console.log(title);
        }
    }

    return (
        <div className="input-field mt">
            <input 
                onKeyPress={onkeypressHandler}
                // onChange={changeHandler}
                // value={title}
                ref={ref} 
                type="text" 
                id="title" 
                placeholder="Введите название дела" 
            />
            <label htmlFor="title" className="active">Введите название дела</label>
        </div>
    )
}