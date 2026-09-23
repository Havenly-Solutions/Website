import { QuickExit } from './QuickExit';

export function SafetyStrip() {
  return (
    <div className="strip">
      <p>
        <b>In immediate danger?</b> Call 10111, or 112 from a mobile.{' '}
        <span className="long">Free GBV Command Centre: 0800 428 428.</span>
      </p>
      <QuickExit />
    </div>
  );
}
