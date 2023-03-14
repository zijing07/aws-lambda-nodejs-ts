"use strict";
/*
 * For a detailed explanation regarding each configuration property and type check, visit:
 * https://jestjs.io/docs/configuration
 */
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = {
    transform: {
        '^.+\\.ts?$': 'esbuild-jest',
    },
    clearMocks: true,
    collectCoverage: true,
    coverageDirectory: 'coverage',
    coverageProvider: 'v8',
    testMatch: ['**/tests/unit/*.test.ts'],
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiamVzdC5jb25maWcuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJqZXN0LmNvbmZpZy50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUE7OztHQUdHOztBQUVILGtCQUFlO0lBQ1gsU0FBUyxFQUFFO1FBQ1AsWUFBWSxFQUFFLGNBQWM7S0FDL0I7SUFDRCxVQUFVLEVBQUUsSUFBSTtJQUNoQixlQUFlLEVBQUUsSUFBSTtJQUNyQixpQkFBaUIsRUFBRSxVQUFVO0lBQzdCLGdCQUFnQixFQUFFLElBQUk7SUFDdEIsU0FBUyxFQUFFLENBQUMseUJBQXlCLENBQUM7Q0FDekMsQ0FBQyIsInNvdXJjZXNDb250ZW50IjpbIi8qXG4gKiBGb3IgYSBkZXRhaWxlZCBleHBsYW5hdGlvbiByZWdhcmRpbmcgZWFjaCBjb25maWd1cmF0aW9uIHByb3BlcnR5IGFuZCB0eXBlIGNoZWNrLCB2aXNpdDpcbiAqIGh0dHBzOi8vamVzdGpzLmlvL2RvY3MvY29uZmlndXJhdGlvblxuICovXG5cbmV4cG9ydCBkZWZhdWx0IHtcbiAgICB0cmFuc2Zvcm06IHtcbiAgICAgICAgJ14uK1xcXFwudHM/JCc6ICdlc2J1aWxkLWplc3QnLFxuICAgIH0sXG4gICAgY2xlYXJNb2NrczogdHJ1ZSxcbiAgICBjb2xsZWN0Q292ZXJhZ2U6IHRydWUsXG4gICAgY292ZXJhZ2VEaXJlY3Rvcnk6ICdjb3ZlcmFnZScsXG4gICAgY292ZXJhZ2VQcm92aWRlcjogJ3Y4JyxcbiAgICB0ZXN0TWF0Y2g6IFsnKiovdGVzdHMvdW5pdC8qLnRlc3QudHMnXSxcbn07XG4iXX0=