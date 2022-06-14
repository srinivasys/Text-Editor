import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background-color: #25262c;
`

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  background-color: #1b1c22;
  width: 80%;
  height: 80vh;
  padding: 15px;
`

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  width: 50%;
  height: 100%;
`

export const Heading = styled.h1`
  color: #faf8fc;
  font-size: 30px;
  font-weight: 800;
  margin-bottom: 120px;
  margin-top: 30px;
`

export const Image = styled.img`
  height: 50%;
`

export const EditingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  border: 2px solid #334155;
  border-radius: 10px;
  width: 50%;
  height: 100%;
`

export const List = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  padding: 10px;
`

export const Items = styled.li`
  display: flex;
  list-style-type: none;
`

export const Button = styled.button`
  color: ${props => props.colorText};
  background-color: transparent;
  border: none;
  cursor: pointer;
  margin-left: 10px;
`

export const TextArea = styled.textarea`
  color: #f8fafc;
  background-color: #25262c;
  font-style: ${props => (props.isItalic ? 'italic' : 'normal')};
  font-size: 20px;
  font-weight: ${props => (props.isBold ? 'bold' : 'normal')};
  text-decoration: ${props => (props.isUnderline ? 'underline' : 'normal')};
  border-top: 2px solid #334155;
  width: 100%;
  height: 100%;
  padding: 20px;
  border: none;
  outline: none;
`
