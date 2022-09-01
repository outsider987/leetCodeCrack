import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import ErrorDialog from '~/components/modals/ErrorDialog';
import { store, selectGlobal } from '~/store';
import { setAlertDialog } from '~/store/global';

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  // children: React.ReactNode;
}

const ModalsWrapper = (props: Props) => {
  const globalSelector = useSelector(selectGlobal);
  const dispatch = useDispatch();
  return (
    <div>
      <ErrorDialog
        toggle={globalSelector.alertDialog.show}
        msg={globalSelector.alertDialog.msg}
        onClick={() =>
          dispatch(
            setAlertDialog({
              alertDialog: { ...globalSelector.alertDialog, show: false },
            })
          )
        }
      />
      {props.children}
    </div>
  );
};
export default ModalsWrapper;
