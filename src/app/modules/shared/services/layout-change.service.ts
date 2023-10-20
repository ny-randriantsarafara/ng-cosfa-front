import { Injectable } from '@angular/core';
import {
  BreakpointObserver,
  Breakpoints,
  BreakpointState,
} from '@angular/cdk/layout';
import { map, Observable } from 'rxjs';
import { ScreenSize } from '../types/screen-size.type';

const BREAKPOINT_MAPPING: Map<ScreenSize, string[]> = new Map();

BREAKPOINT_MAPPING.set(ScreenSize.SMALL, [
  Breakpoints.XSmall,
  Breakpoints.Small,
  Breakpoints.Handset,
]);
BREAKPOINT_MAPPING.set(ScreenSize.MEDIUM, [
  Breakpoints.Medium,
  Breakpoints.Tablet,
]);
BREAKPOINT_MAPPING.set(ScreenSize.LARGE, [
  Breakpoints.Large,
  Breakpoints.XLarge,
  Breakpoints.Web,
]);

@Injectable()
export class LayoutChangeService {
  private layoutChanges$;

  constructor(private breakpointObserver: BreakpointObserver) {
    this.layoutChanges$ = this.breakpointObserver.observe([
      ...Object.values([
        Breakpoints.XSmall,
        Breakpoints.Small,
        Breakpoints.Medium,
        Breakpoints.Large,
        Breakpoints.XLarge,
        Breakpoints.Web,
        Breakpoints.Tablet,
      ]),
    ]);
  }

  getScreenSize(): Observable<ScreenSize | undefined> {
    return this.layoutChanges$.pipe(
      map((breakpointState: BreakpointState) => {
        const sizes = Object.entries(breakpointState.breakpoints)
          .filter(([_, isMatching]) => isMatching)
          .map(([size, _]) => size);

        const result = Array.from(BREAKPOINT_MAPPING.entries()).find(
          ([_, matchingBreakpoints]) =>
            matchingBreakpoints.some((matchingBreakpoint) =>
              sizes.includes(matchingBreakpoint),
            ),
        );

        if (typeof result === 'undefined') {
          return undefined;
        }

        const screenSize = result[0] as ScreenSize;
        return screenSize;
      }),
    );
  }
}
