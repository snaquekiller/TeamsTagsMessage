import {
  chatMessageBehavior,
  Accessibility,
  FocusZoneTabbableElements,
  ChatMessageBehaviorProps,
} from '@fluentui/react-northstar';
import {Enter, getCode, Escape} from 'keyboard-key';

const threadedMessageBehavior: Accessibility<ChatMessageBehaviorProps> = props => {
  const behaviorData = chatMessageBehavior(props);

  if(behaviorData && behaviorData.focusZone){
    behaviorData.focusZone.props = {
      ...behaviorData.focusZone.props,
      handleTabKey: FocusZoneTabbableElements.none,
      shouldEnterInnerZone: event => getCode(event) === Enter,
      isCircularNavigation: false,
    };
  
    behaviorData.keyActions = {
      root: {
        focus: {
          keyCombinations: [{ keyCode: Escape }],
        },
      },
    };
  }


  return behaviorData;
};

export default threadedMessageBehavior
