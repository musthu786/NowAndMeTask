/**
 * Common styling object which has reusable stylings which we can import and reuse the common stylingds where ever needed
 *
 */

import * as colors from '../constants/uiConstants/colorConstants';

const styleObj = {
  container: {
    display: 'flex',
    flex: 1,
    backgroundColor: colors.GREY,
  },
};

export default styleObj;
