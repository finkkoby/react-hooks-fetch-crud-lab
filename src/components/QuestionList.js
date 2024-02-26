import React, { useState, useEffect } from "react";
import QuestionItem from "./QuestionItem";

function QuestionList({ questions, setQuestions }) {

  function handleDeleteClick(targetQuestion) {
    const newList = questions.filter(question => {
      if(question === targetQuestion) return false
      else return true
    })

    fetch(`http://localhost:4000/questions/${targetQuestion.id}`, {
      method: 'DELETE'
    })
      .then(res => res.json())
      .then(() => setQuestions(newList))
  }

  const listQuestions = questions.map(question => {
    return <QuestionItem question={question} key={question.id} onDeleteClick={handleDeleteClick}/>
  })


  return (
    <section>
      <h1>Quiz Questions</h1>
      <ul>{listQuestions}</ul>
    </section>
  );
}

export default QuestionList;
