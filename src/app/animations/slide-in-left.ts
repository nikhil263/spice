import { trigger, state, animate, transition, style } from '@angular/core';

export const slideInLeftAnimation =
    trigger('slideInLeftAnimation', [
        state('*', style({
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0
        })),

        transition(':enter', [
            style({
                left: '-400%'
            }),
            animate('1s ease-in-out', style({
                left: 0
            }))
        ]),
        transition(':leave', [
            animate('.5s ease-in-out', style({
                left: '-400%'
            }))
        ])
    ]);
