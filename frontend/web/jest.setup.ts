import '@testing-library/jest-dom';
import { toHaveNoViolations } from 'jest-axe';

// @ts-ignore
expect.extend(toHaveNoViolations);
