import { useDispatch, useSelector } from 'react-redux';
import { clearText, setText } from '../../feature/formList';
import { FormBlock, FormControl, FormField, FormLabel, FormWrapper } from './Form.styled';

import plusIcon from '../../assets/images/plus.png';

export const Form = (props: { createNewToDo: Function }) => {
    const dispatch = useDispatch();
    const text = useSelector((state: { form: { text: string } }) => state.form.text);

    const formSubmit = (event: React.SyntheticEvent) => {
        event.preventDefault();
        if (text) {
            props.createNewToDo(text);
            dispatch(clearText());
        }
    };

    return (
        <FormWrapper>
            <FormBlock action="#" onSubmit={formSubmit}>
                <FormLabel>
                    <FormField
                        value={text}
                        type="text"
                        onChange={(e) => dispatch(setText(e.target.value))}
                    />
                    <FormControl icon={plusIcon} />
                </FormLabel>
            </FormBlock>
        </FormWrapper>
    );
};
