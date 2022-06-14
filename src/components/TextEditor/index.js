import {Component} from 'react'

import {VscBold} from 'react-icons/vsc'
import {GoItalic} from 'react-icons/go'
import {AiOutlineUnderline} from 'react-icons/ai'

import {
  Container,
  MainContainer,
  CardContainer,
  Heading,
  Image,
  EditingContainer,
  List,
  Items,
  Button,
  TextArea,
} from './styledComponents'

class TextEditor extends Component {
  state = {isBold: false, isItalic: false, isUnderline: false}

  onClickBold = () => {
    this.setState(prevState => ({isBold: !prevState.isBold}))
  }

  onClickItalic = () => {
    this.setState(prevState => ({isItalic: !prevState.isItalic}))
  }

  onClickUnderline = () => {
    this.setState(prevState => ({isUnderline: !prevState.isUnderline}))
  }

  render() {
    const {isBold, isItalic, isUnderline} = this.state
    const boldImg = isBold ? '#faff00' : '#f1f5f0'
    const italicImg = isItalic ? '#faff00' : '#f1f5f0'
    const underlineImg = isUnderline ? '#faff00' : '#f1f5f0'
    return (
      <Container>
        <MainContainer>
          <CardContainer>
            <Heading>Text Editor</Heading>
            <Image
              src="https://assets.ccbp.in/frontend/react-js/text-editor-img.png"
              alt="text editor"
            />
          </CardContainer>
          <EditingContainer>
            <List>
              <Items>
                <Button
                  data-testid="bold"
                  colorText={boldImg}
                  onClick={this.onClickBold}
                >
                  <VscBold size={25} />
                </Button>
              </Items>
              <Items>
                <Button
                  data-testid="italic"
                  colorText={italicImg}
                  onClick={this.onClickItalic}
                >
                  <GoItalic size={25} />
                </Button>
              </Items>
              <Items>
                <Button
                  data-testid="underline"
                  colorText={underlineImg}
                  onClick={this.onClickUnderline}
                >
                  <AiOutlineUnderline size={25} />
                </Button>
              </Items>
            </List>
            <TextArea
              isBold={isBold}
              isItalic={isItalic}
              isUnderline={isUnderline}
            />
          </EditingContainer>
        </MainContainer>
      </Container>
    )
  }
}

export default TextEditor
