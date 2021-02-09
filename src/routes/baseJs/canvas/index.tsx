import React, { useEffect, useState } from 'react';
import { Button, Input } from 'antd';
import styles from './index.less';

const MCanvas: React.FC = () => {
  const [inputValue, setInputValue] = useState<string>();
  const [canvasText, setCanvasText] = useState<string>();
  // 获取随机字符串函数
  const randomString = (len?: number) => {
    len = len || 5;
    const chars = 'QWERTYUIOPASDFGHJKLZXCVBqwertyuiopasdfghjklzxcvb0123456789';
    const maxPos = chars.length;
    let val = '';
    // eslint-disable-next-line for-direction
    for (let i = 0; i < len; i++) {
      val += chars.charAt(Math.random() * maxPos);
    }
    return val;
  };

  // 获取随机颜色函数
  const randomColor = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  };

  // canvas 验证 填充函数
  const cav = (c: any) => {
    const varification = randomString();
    setCanvasText(varification);
    // 获取canvas的宽度
    const ctxwidth = c?.offsetWidth;
    // 获取canvas的高度
    const ctxheight = c?.offsetHeight;
    // 创建画布
    const ctx = c.getContext('2d');
    // 重置画布
    ctx.clearRect(0, 0, ctxwidth, ctxheight);
    // 字体颜色
    ctx.fillStyle = randomColor();
    // 字体大小，字体类型
    ctx.font = '30px Arial';
    // 填充
    ctx.fillText(varification, 35, 35);
    // 验证码上显示线条
    for (let i = 0; i <= 5; i++) {
      ctx.strokeStyle = randomColor();
      // 起始点
      ctx.beginPath();
      // 移动到指定位置，不创建路径
      ctx.moveTo(Math.random() * ctxwidth, Math.random() * ctxheight);
      // 创建一个新的点
      ctx.lineTo(Math.random() * ctxwidth, Math.random() * ctxheight);
      // 填充
      ctx.stroke();
    }
    for (let i = 0; i <= 30; i++) {
      ctx.strokeStyle = randomColor();
      // 起使点
      ctx.beginPath();
      const x = Math.random() * ctxwidth;
      const y = Math.random() * ctxheight;
      // 移动
      ctx.moveTo(x, y);
      // 创建一个新的点
      ctx.lineTo(x + 1, y + 1);
      // 填充
      ctx.stroke();
    }
  };

  useEffect(() => {
    // 获取canvas元素
    const c: any = document.getElementById('myCanvas');
    cav(c);
    c.addEventListener('click', () => {
      cav(c);
    });
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const onInputChange = (e: any) => {
    setInputValue(e.target.value);
  };

  const onSubmit = () => {
    // 使输入验证不区分大小写
    if (inputValue!.toLowerCase() !== canvasText!.toLowerCase()) {
      // eslint-disable-next-line no-alert
      alert('验证失败');
    } else {
      // eslint-disable-next-line no-alert
      alert('验证成功');
    }
  };

  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.mCanvas}>
          <canvas width="150" height="50" className={styles.myCanvas} id="myCanvas" />
        </div>
        <Input className={styles.input} value={inputValue} onChange={onInputChange} />
        <Button type="primary" onClick={onSubmit}>验证</Button>
      </div>
    </div>
  );
};

export default MCanvas;
