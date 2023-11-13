import { getParsedRouterDataList } from '../../router-data/parseRouterData';

import { SubRouteExampleMetaData } from './SubRouteExample/router-data';
import { EventsMetaData } from './Event/router-data';
import { hitTheMoleMetaData } from './HitTheMole/router-data';
import { NemoGameMetaData } from './NemoGame/router-data';
import { BasicFormsRouterMetaData } from './BasicForms/router-data';
import { OrderFormblockRouterMetaData } from './OrderForm/router-data';
export const blockRouterMetaData = [
  SubRouteExampleMetaData,
  EventsMetaData,
  hitTheMoleMetaData,
  NemoGameMetaData,
  BasicFormsRouterMetaData,
  OrderFormblockRouterMetaData,
];
export const blockRouterData = getParsedRouterDataList(blockRouterMetaData);
