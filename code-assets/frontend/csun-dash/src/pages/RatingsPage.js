import { useParams } from "react-router-dom";
import { useState, useEffect } from 'react'
import Header from "../components/Header"
import ProfessorRatingsHeader from "../elements/Professor_Search/ProfessorRatingsHeader";
import StudentRatings from "../elements/Professor_Search/StudentRatings";
import { Alert } from "@mui/material"
import React from 'react';

function RatingsPage() {
    const { subject, email } = useParams()
    const [allClassesInSubject, setAllClassesInSubject] = useState([])
    const [ratings, setRatings] = useState([])
    const [postedReview, setPostedReview] = useState(false)
    const [professor, setProfessor] = useState({})


    function fetchRatingsAndClasses() {
        fetch(`http://130.166.160.102/${email}/ratings`)
            .then(response => response.json())
            .then(ratings => {
                let ratingsArray = []

                ratings.map((rating) => {
                    ratingsArray.push(rating)
                })

                setRatings(ratingsArray)
            })

        fetch(`http://130.166.160.102/${subject}/classes`)
            .then(response => response.json())
            .then(classes => {
                let classesArray = []

                classes.map((classItem) => {
                    classesArray.push(classItem)
                })

                setAllClassesInSubject(classesArray)
            })
    }

    function fetchProfessor(){
        fetch(`http://130.166.160.102/${subject}/professors`)
            .then(response => response.json())
            .then(professors => {
                professors.map((professor) => {
                    if(professor.email == email){
                        setProfessor(professor)
                    }
                })
            })
    }


    useEffect(() => {
        fetchRatingsAndClasses()
        fetchProfessor()
    }, [])

    useEffect(() => {
        fetchRatingsAndClasses()
    }, [postedReview])



    return (
        <div style={{ minHeight: "100vh", backgroundColor: "#1C1C1C" }}>
            <Header></Header>
            {
                postedReview === true ?
                    <Alert style={{ float: "right" }} variant="filled" severity="success">
                        Successfully Posted Review!
                    </Alert> : <div></div>
            }

            <div>
                <ProfessorRatingsHeader
                    ratings={ratings}
                    professorName={`${professor.first_name} ${professor.last_name}`}
                    postedReview={postedReview}
                    setPostedReview={setPostedReview}
                    subject={subject}
                    allClassesInSubject={allClassesInSubject}>
                </ProfessorRatingsHeader>
                <StudentRatings
                    subject={subject}
                    email={professor.email}
                    first_name={professor.first_name}
                    last_name={professor.last_name}
                    postedReview={postedReview}>
                </StudentRatings>
            </div>

        </div>
    )
}

export default RatingsPage