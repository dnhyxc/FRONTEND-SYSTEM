import React from 'react';
import { connect, DispatchProp } from 'react-redux';
import { Button } from 'antd';
import { GlobalState } from '@/models/types';
import styles from './index.less';

interface ISelefProps {
  history: any;
}

interface ISelfState {
  count: number;
}

class ClassDemo extends React.Component<ISelefProps & DispatchProp, ISelfState> {
  constructor(props: ISelefProps & DispatchProp) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  componentDidMount() {
    console.log(this.props);
  }

  addCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };

  componentDidUpdate() {
    this.addCount;
  }

  // componentWillUnmount() { }

  toHooks = () => {
    this.props.history.push('/app/hooks');
  };

  render() {
    return (
      <div className={styles.container}>
        <Button onClick={this.addCount}>click add count</Button>
        <div className={styles.content}>
          click {this.state.count} times
        </div>
        <Button type="primary" onClick={this.toHooks}>toHooksDemo</Button>
      </div>
    );
  }
}

export default connect((state: GlobalState) => ({

}))(ClassDemo);
