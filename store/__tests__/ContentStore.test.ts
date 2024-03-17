import { act, renderHook } from '@testing-library/react-hooks';
import { ChowState, useChowStore } from '../Content.Store';
import { Chow } from '../../types';

describe('Content Store', () => {
    let chowStore: ReturnType<typeof renderHook<unknown, ChowState>>;

    beforeEach(() => {
        chowStore = renderHook(() => useChowStore());
    });

    it('adds chow to store', () => {
        const chow: Chow = {
            title: "Carrot",
            description: "Carrot description",
            image: "https://ciaochow.plusnarrative.biz/uploads/carrots_f0e8e6217a.jpeg"
        }

        act(() => {
            chowStore.result.current.setChow(chow);
        });

        expect(chowStore.result.current.chow).toEqual({
            title: chow.title,
            description: chow.description,
            image: chow.image
        });

    });
})