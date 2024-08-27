import { LightningElement } from 'lwc';

export default class Quizapppage extends LightningElement {
    quizQuestion = [
        {
            id:1,
            question:"Which one is not the tempalte loop?",
            answer:
            {
             a:"for each",
             b:"Iterator",
             c:"map loop"
            }
        },
        {
            id:2,
            question:"Which one of the file is invalid in LWC?",
            answer:
            {a:".svg",
             b:".apex",
             c:".js"}   
        },
        {
        id:3,
            question:"Which of the following is not a directive?",
            answer:
            {a:"foreach",
             b:"iterator",
             c:"@track"
            }}

    ]

    changeHandler(event)
    {
        console.log("name",event.target.name);
        console.log("value",event.target.value);
        const {name,value} = event.target
        this.selected = {...this.selected, [name]:value}
    }

    submitHandler(){}
    resetHandler(){}
}