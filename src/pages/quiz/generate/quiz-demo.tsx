import {useEffect} from "react";
import {Spin} from "antd";
import {useRequest} from "ahooks";
import {createQuiz, QuizParam} from "../../../apis/quiz.ts";
import { QuizPage } from "./quiz.tsx";

interface Props {
    option: QuizParam
}

export const QuizDemo = (props: Props) => {
    const { option} = props

    const { loading , runAsync } = useRequest(createQuiz, {
        manual: true,
    });


    useEffect(() => {
        if(option) {
            // runAsync(option)
        }
    }, []);

    const data = {
        "id": "e22c526b-c405-4e0f-a3d6-44a4bce6baf1",
        "questions": [
            {
                "dimension": "Programming Specification",
                "options": [
                    "Nouns in UpperCamelCase",
                    "Verbs in lowerCamelCase",
                    "Adjectives in PascalCase",
                    "Adverbs in kebab-case"
                ],
                "question": "What are the naming conventions for class names in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Programming Specification",
                "options": [
                    "UserDO",
                    "HTMLDto",
                    "XmlService",
                    "TCPUDPDeal"
                ],
                "question": "Which of the following is a counter example for Java naming conventions?",
                "type": "MULTIPLE"
            },
            {
                "dimension": "Exception and Logs",
                "options": [
                    "UTF-16",
                    "ISO-8859-1",
                    "UTF-8",
                    "UTF-32"
                ],
                "question": "What is the recommended charset encoding for text files in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Security Specification",
                "options": [
                    "It supports only English characters",
                    "It is the most efficient encoding",
                    "It is the default encoding in Java",
                    "It supports a wide range of characters including emoji"
                ],
                "question": "Why is it recommended to use UTF-8 encoding for characters in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Exception and Logs",
                "options": [
                    "Suppress exceptions",
                    "Re-throw exceptions",
                    "Ignore exceptions",
                    "Catch all exceptions"
                ],
                "question": "What is the recommended practice for handling exceptions in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Security Specification",
                "options": [
                    "Displaying user sensitive data directly",
                    "Allowing SQL injection",
                    "Skipping parameter validation",
                    "Implementing CSRF security check"
                ],
                "question": "Which of the following is a mandatory security practice in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Security Specification",
                "options": [
                    "String concatenation SQL",
                    "METADATA validation",
                    "SQL parameter check",
                    "Database access"
                ],
                "question": "What is the recommended way to handle user input parameters to prevent SQL injection in Java?",
                "type": "SINGLE"
            },
            {
                "dimension": "Security Specification",
                "options": [
                    "To prevent memory leaks",
                    "To avoid slow database queries",
                    "To filter user data",
                    "To prevent Cross-site Request Forgery attacks"
                ],
                "question": "Why is it important to use CSRF security check in Java applications?",
                "type": "Single"
            },
            {
                "dimension": "Project Specification",
                "options": [
                    "Use different versions for dependent libraries",
                    "Maintain consistency in versions of dependent libraries",
                    "Include unnecessary APIs in libraries",
                    "Override version numbers in sub-projects"
                ],
                "question": "Which of the following is a recommended practice for library dependencies in Java projects?",
                "type": "SINGLE"
            },
            {
                "dimension": "Library Specification",
                "options": [
                    "Use any GroupID format",
                    "Use 0.0.1 as the initial version",
                    "Use different versions for sub-projects",
                    "Use consistent versions for dependencies"
                ],
                "question": "What is the recommended practice for defining GAV (GroupID, ArtifactID, Version) in Java projects?",
                "type": "SINGLE"
            }
        ],
        "title": "Java Development"
    }


    return <div>
        <Spin spinning={loading}  tip="Gerenating" style={{minHeight: '100px'}}>
            {!!data && <QuizPage quiz={data}></QuizPage>}
        </Spin>
    </div>
}
