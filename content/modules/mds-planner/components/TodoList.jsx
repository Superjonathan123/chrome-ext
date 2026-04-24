import { useState } from 'preact/hooks';
import { useTodos, groupTodos } from '../utils/todoStore.js';

function formatShortDate(iso) {
  if (!iso) return '';
  const [, m, d] = iso.split('-');
  const date = new Date(+iso.slice(0, 4), +m - 1, +d);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
}

function TodoItem({ todo, onToggle, onDelete }) {
  const done = !!todo.completedAt;
  const isUrgentText = todo.urgent && !done;
  return (
    <div class={`mds-pl__todo-item${done ? ' mds-pl__todo-item--done' : ''}`}>
      <span
        class={`mds-pl__todo-check${done ? ' mds-pl__todo-check--done' : ''}`}
        onClick={() => onToggle(todo.id)}
        role="checkbox"
        aria-checked={done}
        tabIndex={0}
      />
      <span
        class="mds-pl__todo-text"
        onClick={() => onToggle(todo.id)}
        role="button"
        tabIndex={0}
      >
        {todo.text}
        {isUrgentText && <span class="mds-pl__todo-urgent">urgent</span>}
      </span>
      <span class="mds-pl__todo-meta">
        {todo.dueDate && formatShortDate(todo.dueDate)}
        <button
          class="mds-pl__todo-delete"
          onClick={(e) => { e.stopPropagation(); onDelete(todo.id); }}
          aria-label="Delete"
          title="Delete"
        >×</button>
      </span>
    </div>
  );
}

function Group({ title, subtitle, count, items, collapsible, onToggle, onDelete }) {
  const [expanded, setExpanded] = useState(!collapsible);
  return (
    <>
      <div
        class={`mds-pl__todo-group${collapsible ? ' mds-pl__todo-group--muted' : ''}`}
        onClick={collapsible ? () => setExpanded(v => !v) : undefined}
      >
        <span class="mds-pl__todo-group-label">
          <b>{title}</b>
          {subtitle && <span class="mds-pl__todo-group-sub">&middot; {subtitle}</span>}
        </span>
        <span class="mds-pl__todo-group-count">
          {count}
          {collapsible && <span class="mds-pl__todo-group-arrow">{expanded ? ' › hide' : ' › show'}</span>}
        </span>
      </div>
      {expanded && items.map(t => (
        <TodoItem key={t.id} todo={t} onToggle={onToggle} onDelete={onDelete} />
      ))}
    </>
  );
}

export function TodoList() {
  const { todos, addTodo, toggleTodo, deleteTodo } = useTodos();
  const [input, setInput] = useState('');

  const groups = groupTodos(todos);

  function handleSubmit(e) {
    e.preventDefault();
    const text = input.trim();
    if (!text) return;
    const isUrgent = /!$|\burgent\b/i.test(text);
    addTodo({ text: text.replace(/!$/, '').trim(), urgent: isUrgent });
    setInput('');
  }

  const openCount = groups.today.length + groups.tomorrow.length + groups.later.length;
  const doneCount = groups.done.length;

  return (
    <div class="mds-pl__todo">
      <form class="mds-pl__todo-input" onSubmit={handleSubmit}>
        <span class="mds-pl__todo-input-box" />
        <input
          type="text"
          placeholder={'jot a note…'}
          value={input}
          onInput={(e) => setInput(e.currentTarget.value)}
        />
      </form>

      {groups.today.length > 0 && (
        <Group
          title="Today"
          subtitle={formatShortDate(new Date().toISOString().slice(0, 10))}
          count={`${groups.today.length} open`}
          items={groups.today}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}

      {groups.tomorrow.length > 0 && (
        <Group
          title="Tomorrow"
          count={`${groups.tomorrow.length} open`}
          items={groups.tomorrow}
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}

      {groups.later.length > 0 && (
        <Group
          title="Later this week"
          count={`${groups.later.length} open`}
          items={groups.later}
          collapsible
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}

      {groups.done.length > 0 && (
        <Group
          title="Done recently"
          count={`${groups.done.length} done`}
          items={groups.done}
          collapsible
          onToggle={toggleTodo}
          onDelete={deleteTodo}
        />
      )}

      {openCount === 0 && doneCount === 0 && (
        <div class="mds-pl__todo-empty">No notes yet. Type above to add one.</div>
      )}
    </div>
  );
}
