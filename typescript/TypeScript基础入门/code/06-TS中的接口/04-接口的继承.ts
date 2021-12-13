interface ISwim {
  swimming: () => void
}

interface IFly {
  flying: () => void
}

interface IAction extends ISwim, IFly {

}

const action: IAction = {
  swimming() {
    console.log("swimming")
  },
  flying() {
    console.log("flying")
  }
}

action.swimming()
action.flying()