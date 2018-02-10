import { Lunch } from './lunch';

enum LunchState {
    NOT_LOADED,
    LOADED,
    ERROR
}

export class LunchRef {

    lunch?: Lunch;
    private state: LunchState;

    private constructor(state: LunchState, lunch?: Lunch) {
        this.lunch = lunch;
        this.state = state;
    }

    public static success(lunch: Lunch): LunchRef {
        return new LunchRef(LunchState.LOADED, lunch);
    }

    public static notLoaded(): LunchRef {
        return new LunchRef(LunchState.NOT_LOADED);
    }

    public static error(): LunchRef {
        return new LunchRef(LunchState.ERROR);
    }

    public isSuccess(): boolean {
        return LunchState.LOADED === this.state;
    }

    public isNotLoaded(): boolean {
        return LunchState.NOT_LOADED === this.state;
    }

    public isError(): boolean {
        return LunchState.ERROR === this.state;
    }

}
