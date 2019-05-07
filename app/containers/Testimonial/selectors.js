import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the testimonial state domain
 */

const selectTestimonialDomain = state => state.testimonial || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Testimonial
 */

const makeSelectTestimonial = () =>
  createSelector(
    selectTestimonialDomain,
    substate => substate,
  );

export default makeSelectTestimonial;
export { selectTestimonialDomain };
