// Browser bindings shared by both pages: only what Drum Studio uses.
// Hand-written with dart:js_interop, so the build needs no packages.
import 'dart:js_interop';
import 'dart:js_interop_unsafe';

@JS()
external Document get document;

@JS()
external Performance get performance;

@JS()
external Navigator get navigator;

@JS()
external int setInterval(JSFunction f, int ms);

@JS()
external void clearInterval(int id);

@JS()
external int setTimeout(JSFunction f, int ms);

@JS()
external void clearTimeout(int id);

@JS()
external int requestAnimationFrame(JSFunction f);

@JS()
external void cancelAnimationFrame(int id);

@JS()
external MediaQueryList matchMedia(String query);

extension type Document._(JSObject _) implements JSObject {
  external Element? getElementById(String id);
  external Element createElement(String tag);
  external bool get hidden;
  external Element? get activeElement;
  external void addEventListener(String type, JSFunction listener);
}

extension type Performance._(JSObject _) implements JSObject {
  external double now();
}

extension type MediaQueryList._(JSObject _) implements JSObject {
  external bool get matches;
}

extension type Navigator._(JSObject _) implements JSObject {
  external bool vibrate(JSAny pattern);
  external MediaDevices? get mediaDevices;
}

extension type MediaDevices._(JSObject _) implements JSObject {
  external JSPromise<MediaStream> getUserMedia(JSObject constraints);
}

extension type MediaStream._(JSObject _) implements JSObject {
  external JSArray<MediaStreamTrack> getTracks();
}

extension type MediaStreamTrack._(JSObject _) implements JSObject {
  external void stop();
}

extension type Element._(JSObject _) implements JSObject {
  external bool get hidden;
  external set hidden(bool value);
  external String get textContent;
  external set textContent(String value);
  external set className(String value);
  external String get tagName;
  external DomTokenList get classList;
  external CssStyle get style;
  external void appendChild(Element child);
  external void replaceChildren();
  external void addEventListener(String type, JSFunction listener);
  external void setAttribute(String name, String value);
  external void removeAttribute(String name);
  external String? getAttribute(String name);
  external void focus();
}

extension type CssStyle._(JSObject _) implements JSObject {
  external void setProperty(String name, String value);
}

extension type DomTokenList._(JSObject _) implements JSObject {
  external bool toggle(String token, bool force);
  external void add(String token);
  external void remove(String token);
}

/// Inputs and selects: the value is always text.
extension type Field._(JSObject _) implements Element {
  external String get value;
  external set value(String value);
  external bool get checked;
  external set checked(bool value);
  external set disabled(bool value);
}

extension type KeyEvent._(JSObject _) implements JSObject {
  external String get key;
  external bool get shiftKey;
  external bool get ctrlKey;
  external bool get metaKey;
  external bool get altKey;
  external bool get repeat;
  external Element? get target;
  external void preventDefault();
}

extension type Event._(JSObject _) implements JSObject {
  external void preventDefault();
}

// ---- Web Audio --------------------------------------------------------------

@JS()
extension type AudioContext._(JSObject _) implements JSObject {
  external AudioContext();
  external double get currentTime;
  external double get sampleRate;
  external String get state;
  external AudioNode get destination;
  external OscillatorNode createOscillator();
  external GainNode createGain();
  external BiquadFilterNode createBiquadFilter();
  external AudioBuffer createBuffer(int channels, int length, double sampleRate);
  external AudioBufferSourceNode createBufferSource();
  external AnalyserNode createAnalyser();
  external AudioNode createMediaStreamSource(MediaStream stream);
  external JSPromise<JSAny?> resume();
  external JSPromise<JSAny?> suspend();
  external JSPromise<JSAny?> close();
}

extension type AudioNode._(JSObject _) implements JSObject {
  external AudioNode connect(AudioNode destination);
  external void disconnect();
}

extension type AudioParam._(JSObject _) implements JSObject {
  external set value(double value);
  external AudioParam setValueAtTime(double value, double time);
  external AudioParam exponentialRampToValueAtTime(double value, double time);
  external AudioParam setTargetAtTime(double value, double time, double tc);
}

extension type OscillatorNode._(JSObject _) implements AudioNode {
  external AudioParam get frequency;
  external set type(String value);
  external void start(double time);
  external void stop(double time);
}

extension type GainNode._(JSObject _) implements AudioNode {
  external AudioParam get gain;
}

extension type BiquadFilterNode._(JSObject _) implements AudioNode {
  external set type(String value);
  external AudioParam get frequency;
  external AudioParam get Q;
}

extension type AudioBuffer._(JSObject _) implements JSObject {
  external JSFloat32Array getChannelData(int channel);
}

extension type AudioBufferSourceNode._(JSObject _) implements AudioNode {
  external set buffer(AudioBuffer value);
  external void start(double time);
  external void stop(double time);
}

extension type AnalyserNode._(JSObject _) implements AudioNode {
  external set fftSize(int value);
  external int get fftSize;
  external set smoothingTimeConstant(double value);
  external void getFloatFrequencyData(JSFloat32Array array);
  external void getFloatTimeDomainData(JSFloat32Array array);
}

// ---- Helpers ----------------------------------------------------------------

T el<T extends JSObject>(String id) => document.getElementById(id)! as T;

Element make(String tag, {String? cls, String? text}) {
  final e = document.createElement(tag);
  if (cls != null) e.className = cls;
  if (text != null) e.textContent = text;
  return e;
}

void on(Element target, String type, void Function() handler) =>
    target.addEventListener(type, ((JSAny? _) => handler()).toJS);

void onId(String id, String type, void Function() handler) =>
    on(el<Element>(id), type, handler);

bool get hasAudio => globalContext.has('AudioContext');

bool get prefersReducedMotion =>
    matchMedia('(prefers-reduced-motion: reduce)').matches;

/// localStorage can be missing or throw (private windows, blocked storage);
/// the pages work without it.
String? loadText(String key) {
  try {
    final storage = globalContext['localStorage'] as JSObject?;
    final v = storage?.callMethod<JSAny?>('getItem'.toJS, key.toJS);
    return v.isA<JSString>() ? (v as JSString).toDart : null;
  } catch (_) {
    return null;
  }
}

void saveText(String key, String value) {
  try {
    final storage = globalContext['localStorage'] as JSObject?;
    storage?.callMethod<JSAny?>('setItem'.toJS, key.toJS, value.toJS);
  } catch (_) {
    // Storage full or blocked: the setting just won't be remembered.
  }
}

/// iPhones mute web audio in silent mode unless the page asks to be treated
/// as playback (Safari 17 and later; ignored elsewhere).
void playThroughSilentMode() {
  final session = (navigator as JSObject)['audioSession'];
  if (session.isA<JSObject>()) {
    (session as JSObject)['type'] = 'playback'.toJS;
  }
}

bool get canVibrate => (navigator as JSObject).has('vibrate');

void vibrate(int ms) {
  try {
    navigator.vibrate(ms.toJS);
  } catch (_) {}
}

/// Keeps the screen awake while the metronome plays, where supported.
class WakeLock {
  JSObject? _sentinel;
  bool wanted = false;

  Future<void> acquire() async {
    wanted = true;
    final lock = (navigator as JSObject)['wakeLock'];
    if (!lock.isA<JSObject>() || _sentinel != null) return;
    try {
      final p = (lock as JSObject).callMethod<JSPromise<JSObject>>(
        'request'.toJS,
        'screen'.toJS,
      );
      _sentinel = await p.toDart;
      on(_sentinel! as Element, 'release', () => _sentinel = null);
    } catch (_) {
      _sentinel = null;
    }
  }

  void release() {
    wanted = false;
    final s = _sentinel;
    _sentinel = null;
    if (s != null) {
      try {
        s.callMethod<JSAny?>('release'.toJS);
      } catch (_) {}
    }
  }
}

/// Registers the offline service worker (both pages call this).
void registerServiceWorker() {
  final sw = (navigator as JSObject)['serviceWorker'];
  if (!sw.isA<JSObject>()) return;
  try {
    final p = (sw as JSObject).callMethod<JSPromise<JSAny?>>(
      'register'.toJS,
      'sw.js'.toJS,
    );
    p.toDart.catchError((Object _) => null);
  } catch (_) {}
}

/// The theme toggle in the nav (the saved choice is applied by theme.js in
/// the <head>, before first paint).
void wireThemeToggle() {
  final b = document.getElementById('themeToggle');
  final root = (document as JSObject)['documentElement'] as Element;
  if (b == null) return;
  void paint() {
    final light = root.getAttribute('data-theme') == 'light';
    final label = light ? 'Switch to dark theme' : 'Switch to light theme';
    b
      ..setAttribute('aria-label', label)
      ..setAttribute('title', label);
    final icon = (b as JSObject)['firstElementChild'] as Element?;
    icon?.textContent = light ? '☾' : '☀';
  }

  on(b, 'click', () {
    final next = root.getAttribute('data-theme') == 'light' ? 'dark' : 'light';
    root.setAttribute('data-theme', next);
    saveText('ds-theme', next);
    paint();
  });
  paint();
}
