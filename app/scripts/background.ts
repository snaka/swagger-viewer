import { EXEC_CONVERT_SWAGGER } from "../../app-src/shared/constants/SendMessageTypes"
import { ExecConvertSwaggerMessage } from "../../app-src/shared/types/SendMessage"
import { CastAny } from "../../app-src/shared/types/utils"

chrome.action.onClicked.addListener((tab) => {
  if (tab.id == null) {
    throw new Error(`Unexpected tab: ${JSON.stringify(tab)}`)
  }

  chrome.tabs.sendMessage(tab.id, {
    type: EXEC_CONVERT_SWAGGER,
  } as CastAny as ExecConvertSwaggerMessage)
})
