import React from 'react'
import { Action, authReducer, ReducerUser } from '../../auth/authReducer';

describe('Pruebas en AuthReducer', () => {
    test('debe retornar el estado por defecto', () => {
        const state = authReducer({ logged: false }, { type: Action.DEFAULT });
        expect(state).toEqual({ logged: false });
    });

    test('debe autenticar y colocar el name del usuario', () => {
        const name = "Maximo";
        const action: ReducerUser = {
            type: Action.LOGIN, payload: {
                name
            }
        }
        // el logged esta en false al inicio
        const state = authReducer({ logged: false }, action);
        // se ejecuta la accion
        expect(state).toEqual({ logged: true, name });
    });

    test('debe de borrar el name del usuario y logged en false', () => {
        const action: ReducerUser = {
            type: Action.LOGOUT
        }
        // el logged esta en false al inicio
        const state = authReducer({ logged: true, name: "jorgito" }, action);
        // se ejecuta la accion
        // console.log(state);

        expect(state).toEqual({ logged: false });
    });



})
