import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { blockRouterMetaData as blockRouterMetaDataJsVariables1 } from './Exercise-js-variables-1/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsVariables2 } from './Exercise-js-variables-2/router-data';
import { blockRouterMetaData as blockRouterMetaDataJsFunction1 } from './Exercise-js-functions/router-data';
import { DateTimeMetaData } from './JsDateTime/router-data';
import { JsExtensionMetaData } from './JsExtension/router-data';
import { jsSetTimeoutMetaData } from './JsSetTimeOut/router-data';
import { jsSetIntervalMetaData } from './JsSetInterval/router-data';
import { JsVanishStringMetaData } from './VanishString/router-data';
import { jsonMetaData } from './JSON/router-data';
import { storageMetaData } from './Storage/router-data';
import { savedinputMetaData } from './SavedInput/router-data';
export const blockRouterMetaData = [
  blockRouterMetaDataJsVariables1,
  blockRouterMetaDataJsVariables2,
  blockRouterMetaDataJsFunction1,
  DateTimeMetaData,
  JsExtensionMetaData,
  jsSetTimeoutMetaData,
  jsSetIntervalMetaData,
  JsVanishStringMetaData,
  jsonMetaData,
  storageMetaData,
  savedinputMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
