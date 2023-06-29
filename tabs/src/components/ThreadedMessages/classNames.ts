import { buttonClassName, chatMessageClassName, chatItemClassName } from '@fluentui/react-northstar';

const chatMessageSlotClassNames = {
  actionMenu: `${chatMessageClassName}__actions`,
  author: `${chatMessageClassName}__author`,
  timestamp: `${chatMessageClassName}__timestamp`,
  badge: `${chatMessageClassName}__badge`,
  content: `${chatMessageClassName}__content`,
  reactionGroup: `${chatMessageClassName}__reactions`,
}

const classNames = {
  threadedMessage: {
    thread: `${chatMessageClassName}__thread`,
    threadBody: `${chatMessageClassName}__thread-body`,
    innerContent: `${chatMessageSlotClassNames.content}-inner`,
    author: `${chatMessageSlotClassNames.author}-inner`,
    timestamp: `${chatMessageSlotClassNames.timestamp}-inner`,
  },
  threadReplies: {
    trigger: `${buttonClassName}__reply`,
    message: `${chatMessageClassName}__reply`,
    gutter: `${chatItemClassName}__reply__gutter`,
    chatItem: `${chatItemClassName}__reply`,
    chatItemMessage: `${chatItemClassName}__message-reply`,
  },
  replyEditor: `${chatMessageClassName}__reply-editor`,
};

export default classNames;
