/* eslint-disable no-unused-vars */
import { useEffect, useReducer, useState } from "react";
import { AdviceId, AdviceText } from "../App.style";
import axios from "axios";

const initialState = {
    error: false,
    post: {}
}

const reducer = (state, action) => {
    switch(action.type) {
        case "FETCH_SUCCESS":
            return {
                error: false,
                post: action.payload
            }
        case "FETCH_FAILED":
            return {
                error: true,
                post: { advice: "Something went wrong!" }
            }
        default:
            return state
    }
}

const AdviceData = () => {
    const [state, dispatch] = useReducer(reducer, initialState)

    useEffect(() => {
        const fetchAdvice = () => {
            axios.get('https://api.adviceslip.com/advice?t=' + Math.random())
            .then(response => {
                dispatch({
                    type: "FETCH_SUCCESS", 
                    payload: response.data.slip
                })
            })
            .catch(err => {
                dispatch({
                    type: "FETCH_ERROR",
                })
            })
        }
        fetchAdvice()
        const interval = setInterval(() => {
            fetchAdvice()
        }, 10000)
        return () => {
            clearInterval(interval)
        }
    },[])


    return ( 
        <>
            <AdviceId>Advice #{state.post.id}</AdviceId>
            <AdviceText>
                {state.error ? state.error : state.post.advice}
            </AdviceText>
        </>
     );
}
 
export default AdviceData;