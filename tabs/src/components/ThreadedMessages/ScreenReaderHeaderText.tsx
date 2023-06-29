import * as React from 'react'

type ScreenReaderTextProps = {
  level: string
  text: string
  author?: string
}
const chatProtoStyle: Record<string, React.CSSProperties> = {
  screenReaderContainerStyles: {
    border: '0px',
    clip: 'rect(0px, 0px, 0px, 0px)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0px',
    width: '1px',
    position: 'absolute',
  },
}

const ScreenReaderHeaderText: React.FC<ScreenReaderTextProps> = props => {
  return (
    <div style={chatProtoStyle.screenReaderContainerStyles} role="heading" aria-level={4}>
      {getMessagePreviewForScreenReader(props.text, props.author)}
    </div>
  )
}

const getMessagePreviewForScreenReader = (text: string, author: string | undefined) => {
  /*  Show the first 44 characters from the message, reasons:
        - as NVDA splits it into 2 lines if more is shown
        - for announcements feature, messaging team went with 44 characters but that was not based on loc issues but some UI real estate issue.  */
  const messageText = text || ''
  return `${messageText.slice(0, 44)} ...${author ? `, by ${author}` : ''}`
}

export default ScreenReaderHeaderText
