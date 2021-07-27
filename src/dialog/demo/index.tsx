import React, { useState } from 'react';
import { Cell, Dialog } from 'react-vant';
import { components } from 'site-mobile-demo';

import './style.less';

export default (): React.ReactNode => {
  const { DemoBlock, DemoSection } = components;
  const [show, setShow] = useState(false);

  return (
    <DemoSection>
      <DemoBlock card title="基础用法">
        <Cell
          title="弹窗提示"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
        <Cell
          title="弹窗提示（无标题）"
          isLink
          onClick={() =>
            Dialog.alert({
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
          }
        />
        <Cell
          title="确认弹框"
          isLink
          onClick={() =>
            Dialog.confirm({
              title: '标题',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              })
          }
        />
      </DemoBlock>
      <DemoBlock card title="圆角按钮样式">
        <Cell
          title="弹窗提示"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              theme: 'round-button',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              })
          }
        />
        <Cell
          title="弹窗提示（无标题）"
          isLink
          onClick={() =>
            Dialog.alert({
              message: '代码是写出来给人看的，附带能在机器上运行',
              theme: 'round-button',
            })
          }
        />
      </DemoBlock>
      <DemoBlock card title="关闭图标">
        <Cell
          title="关闭图标"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              theme: 'round-button',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              })
          }
        />
        <Cell
          title="自定义关闭图标"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              closeIcon: 'close',
              theme: 'round-button',
              message: '代码是写出来给人看的，附带能在机器上运行',
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              })
          }
        />
      </DemoBlock>
      <DemoBlock card title="自定义内容">
        <Cell
          title="自定义内容"
          isLink
          onClick={() =>
            Dialog.alert({
              title: '标题',
              closeable: true,
              theme: 'round-button',
              message: (
                <div style={{ textAlign: 'center', margin: '16px' }}>
                  自定义内容：代码是写出来给人看的，附带能在机器上运行
                </div>
              ),
            })
              .then(() => {
                // on confirm
              })
              .catch(() => {
                // on cancel
              })
          }
        />
      </DemoBlock>
      <DemoBlock card title="异步关闭">
        <Cell
          title="异步关闭"
          isLink
          onClick={() =>
            Dialog.confirm({
              title: '标题',
              message: '弹窗内容',
              beforeClose: (action) => {
                return new Promise((resolve) => {
                  setTimeout(() => {
                    if (action === 'confirm') {
                      resolve(true);
                    } else {
                      // 拦截取消操作
                      resolve(false);
                    }
                  }, 1000);
                });
              },
            })
          }
        />
      </DemoBlock>

      <DemoBlock card title="组件调用">
        <Cell title="组件调用" isLink onClick={() => setShow(true)} />
      </DemoBlock>

      <Dialog
        visible={show}
        title="标题"
        showCancelButton
        onClose={() => setShow(false)}
        onConfirm={() => alert('confirm button click')}
      >
        <img src="https://img.yzcdn.cn/vant/apple-3.jpg" alt="2131" />
      </Dialog>
    </DemoSection>
  );
};