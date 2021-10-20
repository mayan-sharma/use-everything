# use-everything
A custom react hooks library.

```
npm install use-everything
```

### Hooks
### `useTodo`
```
const { todos, addTodo, removeTodo, handleToggle } = useTodo();
```
### `useCounter`
```
const { val, inc, dcr, set, reset } = useCounter();
```
### `useForm`
```
const { inputs, handleChange, resetForm, clearForm } = useForm({ ...fields });
```
### `useSet`
```
const { set, add, remove, has } = useSet();
```
### `useAxios`
```
const { res, error, loading } = useAxios(url='', method='', headers={}, params={}, query={});
```
### `useLocalStorage`
```
const { item, setItem, removeItem } = useLocalStorage(key, value);
```
### `useCookie`
```
const { cookie, setCookie, removeCookie } = useCookie(key, value);
```