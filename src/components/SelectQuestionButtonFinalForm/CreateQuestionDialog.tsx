import React from 'react'
interface Props {
    type: QuestionType;
    onCreated: (id: number) => void;
}
export const CreateQuestionDialog = ({type}: Props) => {

    return type === QuestionTYpe.FreeText ? <input type="text" />: render 
}
